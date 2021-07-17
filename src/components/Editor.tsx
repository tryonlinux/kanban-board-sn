//TODO: Clean up junk code
//TODO: Mobile Friendly
//TODO: Prettier design
import { PlusCircleIcon } from '@primer/octicons-react';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { EditorKit, EditorKitDelegate } from 'sn-editor-kit';
import KanbanWrapper from './KanbanWrapper';
import KanbanItemEditor from './KanbanItemEditor';
import { v4 as uuidv4 } from 'uuid';
const itemsFromBackend = [
  {
    index: 0,
    id: uuidv4(),
    title: 'First Task',
    notes: 'test 1',
  },
  { index: 1, id: uuidv4(), title: 'Second task', notes: 'test 2' },
  { index: 2, id: uuidv4(), title: 'Third task', notes: 'test 3' },
  { index: 3, id: uuidv4(), title: 'Fourth task', notes: 'test 4' },
  { index: 4, id: uuidv4(), title: 'Fifth task', notes: 'test 5' },
  { index: 5, id: uuidv4(), title: 'Sixth task', notes: 'test 6' },
  { index: 6, id: uuidv4(), title: 'Seventh task', notes: 'test 7' },
  { index: 7, id: uuidv4(), title: 'Eighth task', notes: 'test 8' },
];
export enum HtmlElementId {
  snComponent = 'sn-component',
  textarea = 'textarea',
}

export enum HtmlClassName {
  snComponent = 'sn-component',
  textarea = 'sk-input contrast textarea',
}
export interface KanbanItem {
  index: number;
  id: string;
  title: string;
  notes: string;
}

export interface ColumnKeys {
  backLogColumn: Column;
  todoColumn: Column;
  inProgressColumn: Column;
  doneColumn: Column;
}
export interface Column {
  id: string;
  name: string;
  items: {
    index: number;
    id: string;
    title: string;
    notes: string;
  }[];
}
export interface EditorInterface {
  printUrl: boolean;
  text: string;
  loaded: boolean;
  addKanbanItem: boolean;
  editKanbanItem: boolean;
  editKanbanItemId?: string;
  editKanbanItemColumnID?: keyof ColumnKeys;
  backLogColumn: Column;
  todoColumn: Column;
  inProgressColumn: Column;
  doneColumn: Column;
}

const initialState = {
  printUrl: false,
  text: '',
  addKanbanItem: false,
  editKanbanItem: false,
  editKanbanItemId: undefined,
  editKanbanItemColumnID: undefined,
  loaded: true,
  backLogColumn: {
    id: 'backLogColumn',
    name: 'Backlog',
    items: itemsFromBackend,
  },
  todoColumn: { id: 'todoColumn', name: 'Todo', items: [] },

  inProgressColumn: {
    id: 'inProgressColumn',
    name: 'In Progress',
    items: [],
  },
  doneColumn: { id: 'doneColumn', name: 'Done', items: [] },
};

let keyMap = new Map();

export default class Editor extends React.Component<{}, EditorInterface> {
  editorKit: any;

  constructor(props: EditorInterface) {
    super(props);
    this.state = initialState;
    this.moveItemToNewColumn = this.moveItemToNewColumn.bind(this);
    this.moveItemWithinColumn = this.moveItemWithinColumn.bind(this);
    this.displayInfoBox = this.displayInfoBox.bind(this);
    this.onCancelAddKanbanItem = this.onCancelAddKanbanItem.bind(this);
    this.onAddKanbanItem = this.onAddKanbanItem.bind(this);
    this.editKanbanItem = this.editKanbanItem.bind(this);
    this.handleSubmitOfKanbanItem = this.handleSubmitOfKanbanItem.bind(this);
    this.deleteKanbanItem = this.deleteKanbanItem.bind(this);
    this.getKanbanItem = this.getKanbanItem.bind(this);
    this.updateIndexes = this.updateIndexes.bind(this);
  }

  componentDidMount() {
    this.configureEditorKit();
  }
  configureEditorKit = () => {
    let delegate = new EditorKitDelegate({
      /** This loads every time a different note is loaded */
      setEditorRawText: (text: string) => {
        this.setState({
          ...initialState,
          text,
        });
      },
      clearUndoHistory: () => {},
      getElementsBySelector: () => [],
    });

    this.editorKit = new EditorKit({
      delegate: delegate,
      mode: 'plaintext',
      supportsFilesafe: false,
    });
  };

  saveText = (text: string) => {
    this.saveNote(text);
    this.setState({
      text: text,
    });
  };

  saveNote = (text: string) => {
    /** This will work in an SN context, but breaks the standalone editor,
     * so we need to catch the error
     */
    // try {
    //   this.editorKit.onEditorValueChanged(text);
    // } catch (error) {
    //   console.log('Error saving note:', error);
    // }
  };

  onBlur = (e: React.FocusEvent) => {};

  onFocus = (e: React.FocusEvent) => {};

  onKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
    keyMap.set(e.key, true);
    // Do nothing if 'Control' and 's' are pressed
    if (keyMap.get('Control') && keyMap.get('s')) {
      e.preventDefault();
    }
  };

  onKeyUp = (e: React.KeyboardEvent | KeyboardEvent) => {
    keyMap.delete(e.key);
  };
  /**
   * Moves an item within a kanban column
   *
   * @param columnID - ID of the column that holds the item you want to move
   * @param result - the item that is moving that is provided from the React Beautiful DND drop event
   * @returns void
   *
   */
  moveItemWithinColumn(columnID: keyof ColumnKeys, result: any) {
    let tempColumn = this.state[columnID];
    let tempID = result.draggableId;
    let tempItemIndex = tempColumn.items.findIndex((x: any) => x.id === tempID);
    let destinationIndex = result.destination.index;
    let tempItem = tempColumn.items.find((x: any) => x.id === tempID);
    if (tempItemIndex >= 0 && tempItem !== undefined) {
      tempColumn.items.splice(tempItemIndex, 1);
      tempColumn.items.splice(destinationIndex, 0, tempItem);

      this.setState(
        {
          [columnID]: tempColumn,
        } as Pick<ColumnKeys, keyof ColumnKeys>,
        () => {
          this.updateIndexes(columnID);
        }
      );
    }
  }
  /**
   * Moves an item within a kanban column
   *
   * @param sourceID - ID of the column that holds the source item
   * @param destinationID - the ID of the column that you want to move your item to
   * @param result - the item that is moving that is provided from the React Beautiful DND drop event
   * @returns void
   *
   */
  moveItemToNewColumn(
    sourceID: keyof ColumnKeys,
    destinationID: keyof ColumnKeys,
    result: any
  ): void {
    let tempSourceCol = this.state[sourceID];
    let tempDestinationCol = this.state[destinationID];
    let tempID = result.draggableId;
    let destinationIndex = result.destination.index;
    let tempItem = tempSourceCol.items.find((x: any) => x.id === tempID);
    let tempItemIndex = tempSourceCol.items.findIndex(
      (x: any) => x.id === tempID
    );

    if (tempItemIndex >= 0 && tempItem !== undefined) {
      tempSourceCol.items.splice(tempItemIndex, 1);
      tempDestinationCol.items.splice(destinationIndex, 0, tempItem);
    }
    this.setState(
      {
        [sourceID]: tempSourceCol,
        [destinationID]: tempDestinationCol,
      } as Pick<ColumnKeys, keyof ColumnKeys>,
      () => {
        this.updateIndexes(sourceID);
        this.updateIndexes(destinationID);

        //save to editor
      }
    );
  }

  /**
   * Sets the view states for add kanban item to true so the editor switches to the add item view (and sets edit vars to false to be safe)
   *
   * @returns void
   *
   */
  onAddKanbanItem(): void {
    this.setState({
      editKanbanItemId: '',
      editKanbanItemColumnID: undefined,
      addKanbanItem: true,
      editKanbanItem: false,
    });
  }
  /**
   * Resets the addKanban/editKanban states so the view switches back to the main view
   *
   * @returns void
   *
   */
  onCancelAddKanbanItem(): void {
    this.setState({
      editKanbanItemId: '',
      editKanbanItemColumnID: undefined,
      addKanbanItem: false,
      editKanbanItem: false,
    });
  }
  /**
   * Sets the editKanban State, itemID, and ItemColumnID so the view updates to the kanban Item view in edit mode
   *
   * @param kanbanId - The id of the item you want to edit
   * @param columnID - The id of the item's parent column
   * @returns void
   *
   */
  editKanbanItem(kanbanId: string, columnID: keyof ColumnKeys): void {
    this.setState({
      addKanbanItem: false,
      editKanbanItem: true,
      editKanbanItemId: kanbanId,
      editKanbanItemColumnID: columnID,
    });
  }
  /**
   * Resets the index number for each kanban in the state kanban column Array so they are sequential by the order in which they are in the array. This is called whenever you change the order (i.e. delete or add an item)
   *
   * @returns void
   *
   */
  updateIndexes(columnID?: keyof ColumnKeys): void {
    if (columnID !== undefined) {
      let tempColumn = this.state[columnID];
      let tempItems = tempColumn.items.map((item, index) => {
        item.index = index;
        return item;
      });
      tempColumn.items = tempItems;

      this.setState(
        { [columnID]: tempColumn } as Pick<ColumnKeys, keyof ColumnKeys>,
        () => {
          //TODO: write back to editor
          //this.saveNote();
        }
      );
    }
  }
  /**
   * Handles the submit button click when editing or adding a kanban item
   *
   * @param kanbanItem - The item you with to add/edit
   * @param columnID - The id of the item's parent column
   * @returns void
   *
   */
  handleSubmitOfKanbanItem(
    kanbanItem: KanbanItem,
    columnID?: keyof ColumnKeys
  ): void {
    if (columnID === undefined) {
      alert('Error saving changes! Column not defined!');
      return;
    }
    if (this.state.editKanbanItem) {
      let column = this.state[columnID];
      let index = column.items.findIndex((x: any) => x.id === kanbanItem.id);
      column.items.splice(index, 1, kanbanItem);
      //TODO: add me back into state somehow

      this.setState(
        {
          [columnID]: column,
        } as Pick<ColumnKeys, keyof ColumnKeys>,
        () => {
          //TODO: write back to editor
          // this.saveNote();
          this.setState({
            addKanbanItem: false,
            editKanbanItem: false,
            editKanbanItemColumnID: undefined,
            editKanbanItemId: '',
          });
        }
      );
    } else {
      let tempBackLog = this.state.backLogColumn;
      tempBackLog.items.push(kanbanItem);
      this.setState(
        //always add to backlog column new items and at the bottom
        {
          backLogColumn: tempBackLog,
          addKanbanItem: false,
          editKanbanItem: false,
          editKanbanItemColumnID: undefined,
          editKanbanItemId: '',
        },
        () => {
          this.updateIndexes(columnID);
        }
      );
    }
  }
  /**
   * Deletes a kanban item  rom the corresponding colum state and calls saveNote to save back to the editor
   *
   * @param kanbanID - The ID of the Kanban item you want to delete
   * @param - The ID of the parent column of your Kanban item you are deleteing
   * @returns void
   *
   */
  deleteKanbanItem(kanbanID: string, columnID: keyof ColumnKeys) {
    let column = this.state[columnID];
    let index = column.items.findIndex((x: any) => x.id === kanbanID);
    if (index >= 0 && column !== undefined) {
      column.items.splice(index, 1);
      this.setState(
        { [columnID]: column } as Pick<ColumnKeys, keyof ColumnKeys>,
        () => {
          //TODO: write to editor
          // this.saveNote();
        }
      );
    } else {
      alert('Error deleting item!');
    }
  }
  //TODO: Finish this function
  /**
   * Handles the display info event when you click on the info button for a kanban item
   *
   * @param kanbanId - The id of the item you want to view info on
   * @param columnID - The id of the item's parent column
   * @returns void
   *
   */
  displayInfoBox(itemID: String, columnID: keyof ColumnKeys): void {}

  /**
   * Gets the current KanbanItem you are trying to edit when you click on the edit icon
   *
   * @returns any - the Kanban Item
   *
   */
  getKanbanItem(): any {
    if (this.state.editKanbanItemColumnID) {
      return this.state[this.state.editKanbanItemColumnID].items.find(
        (item: any) => item.id === this.state.editKanbanItemId
      );
    } else {
      alert('Error retrieving item! Edit will be canceled!');
      this.setState({
        editKanbanItemId: '',
        editKanbanItemColumnID: undefined,
        addKanbanItem: false,
        editKanbanItem: false,
      });
    }
  }

  render() {
    return (
      <div
        className={
          HtmlElementId.snComponent + (this.state.printUrl ? ' print-url' : '')
        }
        id={HtmlElementId.snComponent}
        tabIndex={0}
      >
        <Container fluid>
          <div id="header">
            <Row>
              <Col>
                <Button onClick={this.onAddKanbanItem} variant="dark">
                  <PlusCircleIcon size={16} />
                </Button>
              </Col>
            </Row>
          </div>

          {this.state.loaded ? (
            this.state.addKanbanItem ? (
              <KanbanItemEditor
                onCancelAddEditKanbanItem={this.onCancelAddKanbanItem}
                handleSubmit={this.handleSubmitOfKanbanItem}
                editMode={false}
                currentKanbanBoard={this.state.editKanbanItemColumnID}
              />
            ) : this.state.editKanbanItem ? (
              <KanbanItemEditor
                onCancelAddEditKanbanItem={this.onCancelAddKanbanItem}
                handleSubmit={this.handleSubmitOfKanbanItem}
                currentKanbanItem={this.getKanbanItem()}
                currentKanbanBoard={this.state.editKanbanItemColumnID}
                editMode={true}
              />
            ) : (
              <div>
                <Row>
                  <Col>
                    <KanbanWrapper
                      backLogColumn={this.state.backLogColumn}
                      todoColumn={this.state.todoColumn}
                      inProgressColumn={this.state.inProgressColumn}
                      doneColumn={this.state.doneColumn}
                      moveItemToNewColumn={this.moveItemToNewColumn}
                      moveItemWithinColumn={this.moveItemWithinColumn}
                      editItem={this.editKanbanItem}
                      deleteItem={this.deleteKanbanItem}
                      displayInfoBox={this.displayInfoBox}
                    />
                  </Col>
                </Row>
              </div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </Container>
      </div>
    );
  }
}

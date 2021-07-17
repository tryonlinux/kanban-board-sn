import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Column, ColumnKeys } from './Editor';
import KanbanColumn from './KanbanColumn';
export interface KanbanWrapperProps {
  backLogColumn: Column;
  todoColumn: Column;
  inProgressColumn: Column;
  doneColumn: Column;
  moveItemToNewColumn: (
    sourceID: keyof ColumnKeys,
    destinationID: keyof ColumnKeys,
    result: any
  ) => void;
  moveItemWithinColumn: (columnID: keyof ColumnKeys, result: any) => void;
  editItem: (text: string, columnID: keyof ColumnKeys) => void;
  deleteItem: (text: string, columnID: keyof ColumnKeys) => void;
  displayInfoBox: (text: string, columnID: keyof ColumnKeys) => void;
}

export interface KanbanWrapperState {}

class KanbanWrapper extends React.Component<
  KanbanWrapperProps,
  KanbanWrapperState
> {
  constructor(props: KanbanWrapperProps) {
    super(props);
    this.state = {};
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }
  /**
   * Handles the drop event of an item for the React Beautiful DND
   *
   * @param result - The Item you are dropping
   * @param columnID - The id of the item's parent column
   * @returns void
   *
   */
  handleOnDragEnd(result: any) {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      this.props.moveItemToNewColumn(
        source.droppableId,
        destination.droppableId,
        result
      );
    } else {
      this.props.moveItemWithinColumn(source.droppableId, result);
    }
  }

  render() {
    return (
      <div
        style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
      >
        <DragDropContext onDragEnd={(result) => this.handleOnDragEnd(result)}>
          <KanbanColumn
            column={this.props.backLogColumn}
            editItem={this.props.editItem}
            deleteItem={this.props.deleteItem}
            displayInfoBox={this.props.displayInfoBox}
          />
          <KanbanColumn
            column={this.props.todoColumn}
            editItem={this.props.editItem}
            deleteItem={this.props.deleteItem}
            displayInfoBox={this.props.displayInfoBox}
          />
          <KanbanColumn
            column={this.props.inProgressColumn}
            editItem={this.props.editItem}
            deleteItem={this.props.deleteItem}
            displayInfoBox={this.props.displayInfoBox}
          />
          <KanbanColumn
            column={this.props.doneColumn}
            editItem={this.props.editItem}
            deleteItem={this.props.deleteItem}
            displayInfoBox={this.props.displayInfoBox}
          />
        </DragDropContext>
      </div>
    );
  }
}

export default KanbanWrapper;

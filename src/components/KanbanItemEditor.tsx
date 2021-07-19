import * as React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { ColumnKeys, KanbanItem } from './Editor';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  index: -1,
  id: '',
  title: '',
  notes: '',
};
export interface KanbanItemEditorProps {
  editMode: boolean;
  currentKanbanItem?: KanbanItem;
  editID?: string;
  currentKanbanBoard?: keyof ColumnKeys;
  handleSubmit: (
    singleKanbanItem: KanbanItem,
    columnID?: keyof ColumnKeys
  ) => void;
  onCancelAddEditKanbanItem: () => void;
}
export interface KanbanItemEditorState {
  index: number;
  id: string;
  title: string;
  notes: string;
}

class KanbanItemEditor extends React.Component<
  KanbanItemEditorProps,
  KanbanItemEditorState
> {
  constructor(props: KanbanItemEditorProps) {
    super(props);
    if (this.props.editMode && this.props.currentKanbanItem) {
      let currentKanbanItem: KanbanItem = this.props.currentKanbanItem;
      this.state = {
        index: currentKanbanItem.index,
        id: currentKanbanItem.id,
        title: currentKanbanItem.title,
        notes: currentKanbanItem.notes,
      };
    } else {
      this.state = initialState;
    }
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
          }}
        >
          <Row>
            <Col>
              <h3 className="text-center">
                Please Enter Details of the Kanban Item
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 6, offset: 3 }}>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    this.setState({
                      title: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 6, offset: 3 }}>
              <Form.Group controlId="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Notes"
                  name="notes"
                  as="textarea"
                  rows={3}
                  value={this.state.notes}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    this.setState({
                      notes: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={{ span: 2, offset: 8 }}>
              <Button
                className="float-right"
                onClick={this.props.onCancelAddEditKanbanItem}
                variant="danger"
              >
                Cancel
              </Button>
              <Button
                variant="success"
                onClick={() => {
                  this.props.editMode
                    ? this.props.handleSubmit(
                        {
                          index: this.state.index,
                          id: this.state.id,
                          title: this.state.title,
                          notes: this.state.notes,
                        },
                        this.props.currentKanbanBoard
                      )
                    : this.props.handleSubmit(
                        {
                          index: -1,
                          id: this.state.id ? this.state.id : uuidv4(),
                          title: this.state.title,
                          notes: this.state.notes,
                        },
                        'backLogColumn'
                      );
                }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default KanbanItemEditor;

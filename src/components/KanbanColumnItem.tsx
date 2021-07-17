import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Col, Row } from 'react-bootstrap';
import ActionsCell from './ActionsCell';
import { ColumnKeys } from './Editor';

export interface KanbanColumnItemProps {
  index: number;
  item: {
    id: string;
    title: string;
    notes: string;
  };
  columnID: keyof ColumnKeys;
  editItem: (text: string, columnID: keyof ColumnKeys) => void;
  deleteItem: (text: string, columnID: keyof ColumnKeys) => void;
  displayInfoBox: (text: string, columnID: keyof ColumnKeys) => void;
}

export interface KanbanColumnItemState {}

class KanbanColumnItem extends React.Component<
  KanbanColumnItemProps,
  KanbanColumnItemState
> {
  constructor(props: KanbanColumnItemProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Draggable
        key={this.props.item.id}
        draggableId={this.props.item.id}
        index={this.props.index}
      >
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                userSelect: 'none',
                padding: 15,
                margin: '0 0 3px 0',
                minHeight: '50px',
                border: '3px solid #000000',
                borderRadius: '15px',
                backgroundColor: snapshot.isDragging ? '#white' : '#C9D1D9', //background color
                color: 'black',
                //textAlign: 'center',
                ...provided.draggableProps.style,
              }}
            >
              <div>
                <Row>
                  <Col>{this.props.item.title}</Col>
                  <Col>
                    <ActionsCell
                      id={this.props.item.id}
                      editItem={this.props.editItem}
                      deleteItem={this.props.deleteItem}
                      displayInfoBox={this.props.displayInfoBox}
                      columnID={this.props.columnID}
                    />
                  </Col>
                </Row>
              </div>
            </div>
          );
        }}
      </Draggable>
    );
  }
}

export default KanbanColumnItem;

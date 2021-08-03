import * as React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Card } from 'react-bootstrap';
import { Column, ColumnKeys } from './Editor';
import KanbanColumnItem from './KanbanColumnItem';

export interface KanbanColumnProps {
  column: Column;
  editItem: (text: string, columnID: keyof ColumnKeys) => void;
  deleteItem: (text: string, columnID: keyof ColumnKeys) => void;
  displayInfoBox: (text: string, columnID: keyof ColumnKeys) => void;
}

export interface KanbanColumnState {}

class KanbanColumn extends React.Component<
  KanbanColumnProps,
  KanbanColumnState
> {
  constructor(props: KanbanColumnProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card key={this.props.column.id}>
        <Card.Header>{this.props.column.name}</Card.Header>
        <Card.Body>
          <div style={{ margin: 8, height: '80vh' }}>
            <Droppable
              droppableId={this.props.column.id}
              key={this.props.column.id}
            >
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      padding: 0,
                      width: 250,
                      height: '80vh',
                      overflowY: 'auto',
                    }}
                  >
                    {this.props.column.items.map((item, index) => {
                      return (
                        <KanbanColumnItem
                          key={item.id}
                          item={item}
                          index={index}
                          editItem={this.props.editItem}
                          deleteItem={this.props.deleteItem}
                          displayInfoBox={this.props.displayInfoBox}
                          columnID={this.props.column.id as keyof ColumnKeys}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </div>
                );
              }}
            </Droppable>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default KanbanColumn;

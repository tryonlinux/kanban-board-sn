import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { TrashIcon, PencilIcon, InfoIcon } from '@primer/octicons-react';
import { ColumnKeys } from './Editor';

export interface ActionsCellProps {
  id: string;
  columnID: keyof ColumnKeys;
  editItem: (text: string, columnID: keyof ColumnKeys) => void;
  deleteItem: (text: string, columnID: keyof ColumnKeys) => void;
  displayInfoBox: (text: string, columnID: keyof ColumnKeys) => void;
}

export interface ActionsCellState {}

class ActionsCell extends React.Component<ActionsCellProps, ActionsCellState> {
  constructor(props: ActionsCellProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>
            <Button
              variant="link"
              style={{ margin: '0px' }}
              size={'sm'}
              onClick={() =>
                this.props.editItem(this.props.id, this.props.columnID)
              }
            >
              <PencilIcon fill="#000" size={16} />
            </Button>
          </Col>
          <Col xs={3}>
            <Button
              variant="link"
              style={{ margin: '0px' }}
              size={'sm'}
              onClick={() =>
                this.props.deleteItem(this.props.id, this.props.columnID)
              }
            >
              <TrashIcon fill="#000" size={16} />
            </Button>
          </Col>
          <Col xs={3}>
            <Button
              variant="link"
              style={{ margin: '0px' }}
              size={'sm'}
              onClick={() =>
                this.props.displayInfoBox(this.props.id, this.props.columnID)
              }
            >
              <InfoIcon fill="#000" size={16} />
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ActionsCell;

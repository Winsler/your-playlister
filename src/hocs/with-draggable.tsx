/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


interface IWithDraggableProps {
  id: string;
  index: number;
}


const withDraggabe = <P extends object>(Wrapped: React.ComponentType<P>) => ({
  id, index, ...restProps
}: IWithDraggableProps & P): JSX.Element => (
  <Draggable draggableId={id} index={index}>
    {
      (provided): JSX.Element => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Wrapped id={id} {...restProps as P} />
        </div>
      )
    }
  </Draggable>
);

export default withDraggabe;

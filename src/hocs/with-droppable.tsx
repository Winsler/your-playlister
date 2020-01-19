/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';


interface IWithDroppableProps {
  id: string;
}


const withDroppable = <P extends object>(Wrapped: React.ComponentType<P>) => ({
  id, ...restProps
}: IWithDroppableProps & P): JSX.Element => (
  <Droppable droppableId={id}>
    {(provided): JSX.Element => (
      <div
        ref={provided.innerRef}
        {...provided.droppableProps}
      >
        <Wrapped
          id={id}
          {...restProps as P}
        />
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default withDroppable;

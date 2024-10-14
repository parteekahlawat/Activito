"use client"
import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  useDraggable,
  useDroppable,
  DragEndEvent,
} from "@dnd-kit/core";
import styles from "./styles/Home.module.css";

interface Item {
  id: string;
  content: string;
}

const DraggableItem: React.FC<{ item: Item }> = ({ item }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: item.id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={styles.item}
    >
      {item.content}
    </div>
  );
};

const DroppableBox: React.FC<{
  id: string;
  items: Item[];
  onDrop: (item: Item, boxId: string) => void;
}> = ({ id, items, onDrop }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const style = {
    backgroundColor: isOver ? "#e0e0e0" : "#f5f5f5",
  };

  return (
    <div ref={setNodeRef} className={styles.box} style={style}>
      <h3>{id === "foodBox" ? "Food Box" : "Things Box"}</h3>
      {items.map((item) => (
        <DraggableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const DragDropBoxes: React.FC = () => {
  const [itemsBox, setItemsBox] = useState<Item[]>([

  ]);
  const [allItems, setAllItems] = useState<Item[]>([
    { id: "item-1", content: "Mango" },
    { id: "item-2", content: "Phone" },
    { id: "item-3", content: "Car" },
    { id: "item-4", content: "Apple" },
    { id: "item-5", content: "Chair" },
    { id: "item-6", content: "Orange" },
  ]);

  const [emptyBox, setEmptyBox] = useState<Item[]>([]);
  const [success, setSuccess] = useState(false);


  useEffect(()=>{

  }, [allItems])


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      let sourceItems: Item[], destinationItems: Item[];

      // Check if the dragged item is from the allItems list
      const isFromAllItems = allItems.find((item) => item.id === active.id);
      if (isFromAllItems) {
        sourceItems = allItems;
        destinationItems = over.id === "foodBox" ? itemsBox : emptyBox;
      } else {
        // Otherwise, find the source and destination between itemsBox and emptyBox
        sourceItems = itemsBox.find((item) => item.id === active.id)
          ? itemsBox
          : emptyBox;
        destinationItems = over.id === "foodBox" ? itemsBox : emptyBox;
      }

      const movedItem = sourceItems.find((item) => item.id === active.id);
      if (!movedItem) return;

      // Remove the item from the source and add to the destination
      const newSourceItems = sourceItems.filter((item) => item.id !== active.id);
      const newDestinationItems = [...destinationItems, movedItem];

      // If the item was in allItems, remove it from allItems and move to one of the boxes
      if (isFromAllItems) {
        setAllItems(newSourceItems);
        if (over.id === "foodBox") {
          setItemsBox(newDestinationItems);
        } else {
          setEmptyBox(newDestinationItems);
        }
      } else {
        // Handle dragging between itemsBox and emptyBox
        if (over.id === "foodBox") {
          setItemsBox(newDestinationItems);
          setEmptyBox(newSourceItems);
        } else {
          setItemsBox(newSourceItems);
          setEmptyBox(newDestinationItems);
        }
      }

      if (newSourceItems.length === 0) {
        
        const requiredItems = ["item-1", "item-4", "item-6"];
        const hasRequiredItems = requiredItems.every((requiredId) =>
          itemsBox.forEach((item) => item.id === requiredId)
        );
        console.log("seeee ", hasRequiredItems)
        if (hasRequiredItems) {
          // Display success message
          console.log(hasRequiredItems, " see")
          setSuccess(true);
        }
      }
    }

   
    
  };

  const DroppableAllBox: React.FC<{
    id: string;
    items: Item[];
    onDrop: (item: Item, boxId: string) => void;
  }> = ({ id, items, onDrop }) => {
    const { isOver, setNodeRef } = useDroppable({
      id,
    });

    const style = {
      backgroundColor: isOver ? "#e0e0e0" : "#f5f5f5",
    };

    return (
      <>
        <div ref={setNodeRef} className={styles.allBox} style={style}>
          <h3 className={styles.heading}>All Box</h3>
          <div className={styles.itemsContainer}>
            {items.map((item) => (
              <DraggableItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </>

    );
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <DroppableAllBox id="itemsAllBox" items={allItems} onDrop={() => { }} />
      <div className={styles.container}>
        <DroppableBox id="foodBox" items={itemsBox} onDrop={() => { }} />
        <DroppableBox id="thingsBox" items={emptyBox} onDrop={() => { }} />
      </div>
      {success && (
        <div className={styles.successPopup}>
          <p>Success! You have moved items 1, 4, and 6 correctly!</p>
        </div>
      )}
    </DndContext>
  );
};

export default DragDropBoxes;

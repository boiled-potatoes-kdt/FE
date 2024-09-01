import ListItem, { CommunityItemProps } from "../ListItem";

interface ListProps {
  items: CommunityItemProps[];
}

const List = ({ items }: ListProps) => {
  return (
    <ul>
      {items.map((boardItem) => (
        // eslint-disable-next-line
        <ListItem key={boardItem.id} {...boardItem} />
      ))}
    </ul>
  );
};
export default List;

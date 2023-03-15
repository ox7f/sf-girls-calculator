interface SidebarMenuItemProps {
  isSelected: boolean;
  name: string;
  select: () => void;
}

const MenuItem: React.FC<SidebarMenuItemProps> = ({ isSelected, name, select }) => {
  const className = `menu-item ${isSelected ? 'selected' : ''}`;

  return (
    <li className={className.replace(/\s+/g, ' ')} onClick={select}>
      <a>{name}</a>
    </li>
  );
};

export default MenuItem;

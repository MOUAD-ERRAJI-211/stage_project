interface PAGE2_ButtonsProps {
  onAddProductClick: () => void;
  onUsersTableClick: () => void;
  onAddSiteClick: () => void;
  onTransactionClick: () => void;
  onADDTransactionClick: () => void;
}

const PAGE2_Buttons: React.FC<PAGE2_ButtonsProps> = ({
  onAddProductClick,
  onUsersTableClick,
  onAddSiteClick,
  onTransactionClick,
  onADDTransactionClick,
}) => {
  return (
    <div className="page2_buttons-container">
      <button onClick={onAddProductClick} className="button-29"> Add Product </button>
      <button onClick={onUsersTableClick} className="button-29"> Users Table </button>
      <button onClick={onAddSiteClick} className="button-29"> Add Site </button>
      <button onClick={onTransactionClick} className="button-29"> Transaction </button>
      <button onClick={onADDTransactionClick} className="button-29"> ADD Transaction </button>

    </div>
  );
};

export default PAGE2_Buttons;

import { CardWrapper, Image, Label } from 'components/Sticker.styled';

export const Sticker = ({
  sticker: { id, img, label },
  initialIdx,
  onClick,
  onDelete,
}) => {
  return (
    <>
      <CardWrapper onClick={onClick}>
        <Image src={img} alt={label} />
        {initialIdx && <Label>{label}</Label>}
        <button onClick={() => onDelete(id)}>Delete</button>
      </CardWrapper>
    </>
  );
};

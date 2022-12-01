import { Sticker } from './Sticker';
import { List } from 'components/StickerList.styled';
import { Component } from 'react';

export class StickerList extends Component {
  state = {
    initialIdx: null,
    isOpenSticker: false,
  };

  initialSticker = idx => {
    this.setState({
      initialIdx: idx,
    });
  };

  render() {
    const { stickers, deleteHandler } = this.props;
    const { initialSticker } = this;

    return (
      <List>
        {stickers.map((sticker, idx) => {
          return (
            <li key={idx}>
              <Sticker
                sticker={sticker}
                onDelete={deleteHandler}
                initialIdx={this.state.initialIdx === idx}
                onClick={() => initialSticker(idx)}
              />
            </li>
          );
        })}
      </List>
    );
  }
}

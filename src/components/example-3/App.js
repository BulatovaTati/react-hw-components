import { Layout } from 'components/Layout';
import { Component } from 'react';
import { Form } from './form';
import { StickerList } from './StickerList';

// import stickers from './stickers.json';

/**
 * Может быть открыт только один стикер, остальные закрыты.
 * То есть при открытии нового, закрывается тот, что был открыт.
 * Можно добавлять новые стикеры через форму. (Занятие 2 этой недели)
 */

export class App extends Component {
  state = {
    stickers: [],
  };

  addSticker = ({ id, img, label }) => {
    this.setState(prevState => ({
      stickers: [...prevState.stickers, { id, img, label }],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      stickers: prevState.stickers.filter(stickers => stickers.id !== id),
    }));
  };
  componentDidMount() {
    const getStickers = JSON.parse(localStorage.getItem('stickers'));
    if (getStickers) {
      this.setState({ stickers: getStickers });
    }
  }

  componentDidUpdate(_, prevState) {
    const { stickers } = this.state;
    if (stickers !== prevState.stickers) {
      localStorage.setItem('stickers', JSON.stringify(stickers));
    }
  }
  render() {
    const { addSticker, deleteContact } = this;
    const { stickers } = this.state;
    return (
      <Layout>
        <h1>Example 3</h1>
        <Form addSticker={addSticker} />

        <StickerList stickers={stickers} deleteHandler={deleteContact} />
      </Layout>
    );
  }
}

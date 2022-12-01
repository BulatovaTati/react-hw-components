import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
<<<<<<< Updated upstream
import stickers from '../../stickers.json';
=======
import stickers from './stickers.json';
>>>>>>> Stashed changes

/**
 * Может быть открыт только один стикер, остальные закрыты.
 * То есть при открытии нового, закрывается тот, что был открыт.
 */

export const App = () => {
  return (
    <Layout>
      <h1>Example 2</h1>
      <StickerList stickers={stickers} />
    </Layout>
  );
};

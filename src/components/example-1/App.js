import { Layout } from 'components/Layout';
import { StickerList } from './StickerList';
<<<<<<< Updated upstream
import stickers from '../../stickers.json';
=======
import stickers from './stickers.json';
>>>>>>> Stashed changes

/**
 * Каждый стикер должен открываться и закрываться независимо от остальных
 */

export const App = () => {
  return (
    <Layout>
      <h1>Example 1</h1>
      <StickerList stickers={stickers} />
    </Layout>
  );
};

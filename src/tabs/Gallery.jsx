import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isVisible: false,
    isEmpty: false,
  };

  handleSubmit = query => {
    this.setState({
      query,
      page: 1,
      images: [],
      isEmpty: false,
      isVisible: false,
    });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getFotos(query, page);
    }
  }
  getFotos = async (query, page) => {
    if (!query) return;

    try {
      const {
        photos,
        total_results,
        per_page,
        page: currentPage,
      } = await ImageService.getImages(query, page);

      if (photos.length === 0) {
        this.setState({ isEmpty: true });
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...photos],
        isVisible: currentPage < Math.ceil(total_results / per_page),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, isVisible, isEmpty } = this.state;
    const { onLoadMore, handleSubmit } = this;

    return (
      <>
        <SearchForm onSubmit={handleSubmit} />
        {isEmpty && <Text>there is no images</Text>}

        <Grid>
          {images.length > 0 &&
            images.map(({ id, avg_color, alt, src }) => (
              <GridItem key={id}>
                <CardItem color={avg_color}>
                  <img src={src.large} alt={alt} />
                </CardItem>
              </GridItem>
            ))}
        </Grid>

        {isVisible && <Button onClick={onLoadMore}>Load more</Button>}
      </>
    );
  }
}

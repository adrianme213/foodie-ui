import React from 'react';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import TrendingCarousel from '../home/TrendingCarousel';
import ListThumbnails from '../ListThumbnails';
import NavFilterThumbnails from '../NavFilterThumbnails';
import RecipeSubmissionForm from './RecipeSubmissionForm';

class RecipeHomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Four Mouthwatering Recipes for You',
      displayRecipes: [
        { id: 1, name: 'Tacos', description: 'Bomb tacos', url: 'https://media.timeout.com/images/103202788/image.jpg' },
        { id: 2, name: 'Pizza', description: 'Slices of heaven', url: 'http://storage.googleapis.com/bro-cdn1/zgrid/themes/10411/images/feature-pizza.jpg' },
        { id: 3, name: 'Burritos', description: 'Carne asada for dayz', url: 'http://1.bp.blogspot.com/_1wWTObAexYs/STkUe4a2pAI/AAAAAAAAC0s/2tovJkKflsw/s400/la+puerta+carne+asada+burritos.JPG' },
        { id: 4, name: 'Beer', description: 'Here to question, do you really need food?', url: 'http://1.bp.blogspot.com/-1GSWaUnbicQ/UKqTLy-o87I/AAAAAAAAAr4/ht9oXlVUMxM/s1600/beer-mug.jpg' },
      ],
      trendingRecipes: [
        { id: 1, name: 'Tacos', description: 'Bomb tacos', url: 'https://media.timeout.com/images/103202788/image.jpg' },
        { id: 2, name: 'Pizza', description: 'Slices of heaven', url: 'http://storage.googleapis.com/bro-cdn1/zgrid/themes/10411/images/feature-pizza.jpg' },
        { id: 3, name: 'Burritos', description: 'Carne asada for dayz', url: 'http://1.bp.blogspot.com/_1wWTObAexYs/STkUe4a2pAI/AAAAAAAAC0s/2tovJkKflsw/s400/la+puerta+carne+asada+burritos.JPG' },
        { id: 4, name: 'Beer', description: 'Here to question, do you really need food?', url: 'http://1.bp.blogspot.com/-1GSWaUnbicQ/UKqTLy-o87I/AAAAAAAAAr4/ht9oXlVUMxM/s1600/beer-mug.jpg' },
      ],
    };
  }

  componentDidMount() {
    /*
    */
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={6} mdOffset={4}>
              <PageHeader>Welcome to Recipes <br />
                <small>See Below for Recipes or Submit Your Own</small>
              </PageHeader>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <h1>Other Stuff</h1>
              <p>Nuts</p>
              <RecipeSubmissionForm />
            </Col>
            <Col xs={6} md={6}>
              <h1>TITLE</h1>
              <p>Recipe Details</p>
              <TrendingCarousel picturesToDisplay={this.state.displayRecipes} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} mdOffset={4}>
              <PageHeader>Filter Recipe Results Below<br />
                <small>See Below for Recipes or Submit Your Own</small>
              </PageHeader>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <NavFilterThumbnails />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default RecipeHomePage;
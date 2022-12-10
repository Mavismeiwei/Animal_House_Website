import * as React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import imgEvent1 from '../assets/images/projects/event1.png';
import imgEvent2 from '../assets/images/projects/event2.jpeg';
import imgEvent3 from '../assets/images/projects/event3.jpeg';
import imgEvent4 from '../assets/images/projects/event4.jpeg';
import imgEvent5 from '../assets/images/projects/event5.jpeg';
import imgEvent6 from '../assets/images/projects/event6.jpeg';

const list = [
  {
    title: 'Voluntary Activity',
    subTitle: 'Some students volunteer to take care of stray animals.',
    image: imgEvent1
  },
  {
    title: 'DOGRUN',
    subTitle: 'In this activity, pet owners can not only "run" with their dogs, but also enjoy the joy of color running.',
    image: imgEvent2
  },
  {
    title: 'Adoption',
    subTitle: 'Caring people adopt homeless stray dogs.',
    image: imgEvent3
  },
  {
    title: 'Accompany The Elderly',
    subTitle: 'Conduct regular medical examinations of rescued stray animals.',
    image: imgEvent4
  },
  {
    title: 'Outdoor Activity',
    subTitle: 'Stray animals take part in outdoor activities.',
    image: imgEvent5
  },
  {
    title: 'Medical Examination',
    subTitle: 'Conduct regular medical examinations of rescued stray animals.',
    image: imgEvent6
  },
];

const MediaCard = (props: any) => {
  const data = props.data;
  return (
    <div style={{margin: '2px 20px 2px 0'}}>
      <Card sx={{ width: '100%', position: 'relative' }}>
        <CardMedia
          component="img"
          height="300px"
          style={{height: 300}}
          image={data.image}
          alt="green iguana"
        />
        <CardContent sx={{position: 'absolute', bottom: 0, color: '#fff'}}>
          <Typography gutterBottom variant="h6" component="div">
            {data.title}
          </Typography>
          <Typography variant="body1" >
            {data.subTitle}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = () => {
  return (
    <div className='relative flex flex-col w-full px-4 mt-20 mb-10 lg:px-20 xl:px-20 max-w-screen-2xl'>
      <Carousel
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
        infinite={true}
      >
        {list.map(item => {
          return (
            <MediaCard key={item.image} data={item} />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Simple;

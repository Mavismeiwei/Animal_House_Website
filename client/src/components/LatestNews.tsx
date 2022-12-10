import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [{
  title: 'Happy Adoption Story: Opal',
  subTitle: 'I adopted Opal on July 29th.',
  author: 'Dennis',
  content: 'My only concern was that she wouldn\'t get along with my German Shepard, Rottweiler, 90 pound dog. After about a week of letting them observe each other from a distance, they have become best buds. Pretty funny that a 90 pounder is afraid of a 6 pound cat. I hope the picture went thru showing that they are now inseparable!'
}, {
  title: 'Happy Adoption Story: Ryley ',
  subTitle: 'Meet Ryley (shelter name Stout).',
  author: 'Kirsten',
  content: 'He is the best little dog ever- one ear up and another down :). Ryley is settling in at home very well. So lucky to have found him!! Ryley is loving his forever home with lots of treats, walks and tons of love. A big thank you to shelter staff for the compassion and generosity through the entire adoption process. I am very grateful to Multnomah County Animal Service for bringing Ryley in my life. He is very special dog! Thanks for your dedication in making animals lives better!'
}, {
  title: 'Happy Adoption Story: Bailey',
  subTitle: 'I can\'t believe that we\'ve only had Bailey a month! ',
  author: 'Olivia',
  content: 'Although it took some adjusting, she has made a wonderful addition to our pet family. Our heeler mix, Charlie, enjoys having a playmate to pal around with. They wrestle and romp together! Charlie is much calmer since Bailey came along. Bailey is very snuggly and loves everyone in the family. We couldn\'t imagine our family without her!'
}];

const News = () => {
  return (
    <div>
      {data.map(item => (
        <Accordion key={item.title} defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>{item.subTitle}</strong>
            </Typography>
            {item.content} 
            <Typography>--{item.author}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default News;
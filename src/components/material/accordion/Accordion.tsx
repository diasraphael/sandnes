import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log(event);
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="flex-1">
      <Accordion
        sx={{ p: 2 }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          //   sx={{ borderColor: '#e1dbcb' }}
          expandIcon={<ExpandMoreIcon htmlColor="#832732" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '20px' }}>
            Our Mission
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Building a united church that is spiritually powerful. Consisting of
            Tamil Christian brothers and sisters who wish to worship the Lord
            God in truth and spirit, with Jesus Christ as the head and
            themselves as the body of Christ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ p: 2 }}
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="#832732" />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '20px' }}>
            Our Vision
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Preaching the Good news of Christ to those Tamil people living in
            Norway. Espesially to those who do not know Christ and His love.
            This is to redeem them from bondages of sin, curse, pain and lead
            them towards Christ teaching.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ p: 2 }}
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="#832732" />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontSize: '20px' }}>
            Our Goal
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Faith Baptist Church has started its mission from year 2000.
            From the begining Tamil Baptist Church has always volenteered and
            involved with social welfare and mission in SriLanka. Todays
            pathatic situation in which our peoples are facing, so its our duty
            to raise and built our nation. Our loved ones has faced the worst
            humanitarian disaster of the decade.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

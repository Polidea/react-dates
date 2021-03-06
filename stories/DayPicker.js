import React from 'react';
import { storiesOf } from '@kadira/storybook';
import DayPicker from '../src/components/DayPicker';

import { VERTICAL_ORIENTATION } from '../constants';

const TestPrevIcon = props => (
  <span style={{
      border: '1px solid #dce0e0',
      backgroundColor: '#fff',
      color: '#484848',
      padding: '3px'
    }}
  >
    Prev
  </span>
);
const TestNextIcon = props => (
  <span style={{
    border: '1px solid #dce0e0',
    backgroundColor: '#fff',
    color: '#484848',
    padding: '3px'
    }}
  >
    Next
  </span>
);

const CustomCalendarDay = props => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    userSelect: 'none',
    // border: '1px solid #dce0e0',
    // backgroundColor: '#fff',
    // color: '#484848',
    // padding: '3px'
    }}
  >
    <span>{props.day.format('D')}</span>
    <span>340$</span>
  </div>
);


storiesOf('DayPicker', module)
  .addWithInfo('default', () => (
    <DayPicker />
  ))
  .addWithInfo('more than one month', () => (
    <DayPicker numberOfMonths={2} />
  ))
  .addWithInfo('vertical', () => (
    <DayPicker
      numberOfMonths={2}
      orientation={VERTICAL_ORIENTATION}
    />
  ))
  .addWithInfo('with custom arrows', () => (
    <DayPicker
      navPrev={<TestPrevIcon />}
      navNext={<TestNextIcon />}
    />
  ))
  .addWithInfo('vertical with fixed-width container', () => (
    <div style={{ width: '400px' }}>
      <DayPicker
        numberOfMonths={2}
        orientation={VERTICAL_ORIENTATION}
      />
    </div>
  ))
  .addWithInfo('custom calendar day', () => (
    <DayPicker
      dayLabel={CustomCalendarDay}
    />
  ));

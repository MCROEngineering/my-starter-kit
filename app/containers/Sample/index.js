import * as React from 'react';
import sampleReducer from 'modules/sample';
import { injectAsyncReducers } from 'store';
import styles from './styles.scss';

injectAsyncReducers({
  sample: sampleReducer,
});

const SampleContainer = () => (
  <section className={styles.bla}>
    <div>Sample</div>
  </section>
);

export default SampleContainer;

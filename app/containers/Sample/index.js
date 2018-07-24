import * as React from 'react';
import sampleReducer from 'modules/sample';
import { injectAsyncReducers } from 'store';

injectAsyncReducers({
  sample: sampleReducer,
});

const SampleContainer = () => (
  <section>
    <div>Sample</div>
  </section>
);

export default SampleContainer;

import { render } from '@testing-library/react'
import { Main } from './index';

describe('<Main /> ', () => {
  it('should  render the heading', () => {
    render(
      <Main />
    );
  })
});

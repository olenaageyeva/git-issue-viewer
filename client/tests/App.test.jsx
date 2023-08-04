import { render, screen } from '@testing-library/react';
import App from "../src/App";


describe('App', () => {
  beforeEach(()=>{
    render(<App />);    
  })  
  it('renders Viewer with proper class', () => {    
    expect(screen.getByTestId("viewer")).toBeInTheDocument();    
  });
  it('renders Viewer with proper title', () => {    
    expect(screen.getByText("Github Issues Viewer")).toBeInTheDocument();
  });
});
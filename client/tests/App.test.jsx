import { render, screen } from '@testing-library/react';
import App from "../src/App";


describe('App', () => {
  beforeEach(()=>{
    render(<App />);    
  })  
  it('renders with proper class', () => {    
    expect(screen.getByTestId("app")).toBeInTheDocument();    
  });
  it('renders Viewer with proper class and title', () => {    
    expect(screen.getByTestId("viewer")).toBeInTheDocument();    
    expect(screen.getByText("Github Issues Viewer")).toBeInTheDocument();
  });
});
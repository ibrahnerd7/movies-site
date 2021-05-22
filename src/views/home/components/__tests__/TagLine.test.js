import { render} from '@testing-library/react';
import TagLine from '../TagLine'
import React from 'react';

describe("Renders tagline",()=>{
    test('should render welcome',()=>{
        const {getByText} =render(<TagLine />);
        const welcome=getByText(/Welcome ./);
        expect(welcome).toHaveTextContent("Welcome .");
    })
    test('should tagline message',()=>{
        const {getByText} =render(<TagLine />);
        const tagline=getByText(/Millions of movies, TV shows and people to discover. Explore now./);
        expect(tagline).toHaveTextContent("Millions of movies, TV shows and people to discover. Explore now.");
    })
    test('should show  get started button',()=>{
        const {getByText} =render(<TagLine />);
        const button=  getByText(/Get started/);
        expect(button).toHaveTextContent("Get started");
    })
    test('should show  tags',()=>{
        const {getByTestId} =render(<TagLine />);
      expect(getByTestId('welcome-text')).toBeInTheDocument();
      expect(getByTestId('tagline-text')).toBeInTheDocument();
      expect(getByTestId('btn-get-started')).toBeInTheDocument();

    })
})
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import WeatherService from './service/weatherService';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('weatherService should return news list', () => {
  let sut = new WeatherService();
  const result = sut.getNewsList();
  let newsList = [
      {
          "id": 1,
          "title": "test"
      }
  ];
  expect(result).toEqual(newsList);
});

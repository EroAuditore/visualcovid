import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const ChartD = ({ country }) => {
  const { confirmed, deaths } = country;
  if (!confirmed) return <></>;
  const data = {
    labels: ['infected', 'Death'],
    datasets: [
      {
        label: '# infections',
        data: [confirmed.value, deaths.value],
        backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} className="chart" />;
};

ChartD.propTypes = {
  country: PropTypes.shape({
    confirmed: PropTypes.instanceOf(Object).isRequired,
    deaths: PropTypes.isRequired,
  }).isRequired,
};

export default ChartD;

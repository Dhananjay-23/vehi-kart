import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
  padding: '20px',
  maxWidth: '600px',
  margin: 'auto',
  marginTop: '50px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
});

const Title = styled(Typography)({
  marginBottom: '20px',
});

const DetailsItem = styled(Typography)({
  marginBottom: '10px',
});

const TestDriveButton = styled(Button)({
  marginTop: '20px',
});

function VehicleDetailsPage() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    async function fetchVehicle() {
      try {
        const response = await axios.get(`http://localhost:5000/vehicle/${id}`);
        setVehicle(response.data);
      } catch (error) {
        console.error('Error fetching vehicle details:', error);
      }
    }

    fetchVehicle();
  }, [id]);

  const handleRequestTestDrive = () => {
    // Logic to handle request test drive
    console.log('Request Test Drive clicked');
  };

  if (!vehicle) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Title variant="h4">{`${vehicle.manufacturer} ${vehicle.model}`}</Title>
      <DetailsItem variant="body1">{`Year: ${vehicle.year}`}</DetailsItem>
      <DetailsItem variant="body1">{`Mileage: ${vehicle.mileage} km`}</DetailsItem>
      <DetailsItem variant="body1">{`Price: ₹ ${vehicle.price}`}</DetailsItem>
      <DetailsItem variant="body1">{`Predicted Price: ₹ ${vehicle.predictedPrice}`}</DetailsItem>
      <DetailsItem variant="body1">{`Location: ${vehicle.location}`}</DetailsItem>
      <DetailsItem variant="body1">{`Owner: ${vehicle.owner.name}`}</DetailsItem>
      <DetailsItem variant="body1">{`Reviews: ${vehicle.reviews || 'No reviews'}`}</DetailsItem>
      <DetailsItem variant="body1">{`Contact Number: ${vehicle.contactNumber}`}</DetailsItem>
      <DetailsItem variant="body1">{`Inspected: ${vehicle.isInspected ? 'Yes' : 'No'}`}</DetailsItem>
      {vehicle.isInspected && <DetailsItem variant="body1">{`Inspected By: ${vehicle.inspectedBy.name}`}</DetailsItem>}
      <TestDriveButton variant="contained" color="primary" onClick={handleRequestTestDrive}>
        Request Test Drive
      </TestDriveButton>
    </Container>
  );
}

export default VehicleDetailsPage;

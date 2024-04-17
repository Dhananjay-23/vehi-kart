// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Typography from '@mui/material/Typography';

// const UserProfilePage = () => {
//   const [user, setUser] = useState(null);
//   const id = localStorage.getItem('userId');

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/user/${id}`);
//         setUser(response.data.user);
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };

//     fetchUserProfile();
//   }, [id]);

//   if (!user) {
//     return <Typography variant="h4">Loading...</Typography>;
//   }

//   return (
//     <div>
//       <Typography variant="h4">User Profile</Typography>
//       <Typography variant="h6">Name: {user.name}</Typography>
//       <Typography variant="h6">Email: {user.email}</Typography>
//       <Typography variant="h6">Expert: {user.isExpert ? 'Yes' : 'No'}</Typography>
      
//       <Typography variant="h6">Added Vehicles:</Typography>
//       {user.addedVehicles && user.addedVehicles.length > 0 ? (
//         user.addedVehicles.map((vehicle) => (
//           <Typography key={vehicle._id}>{vehicle.manufacturer} {vehicle.model}</Typography>
//         ))
//       ) : (
//         <Typography>No vehicles added yet.</Typography>
//       )}

//       {user.isExpert && (
//         <div>
//           <Typography variant="h6">Requested Test Drives:</Typography>
//           {user.requestedTestDrives && user.requestedTestDrives.map((testDriveId) => (
//             <Typography key={testDriveId}>{testDriveId}</Typography>
//           ))}
          
//           <Typography variant="h6">Inspections:</Typography>
//           {user.inspections && user.inspections.map((inspectionId) => (
//             <Typography key={inspectionId}>{inspectionId}</Typography>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfilePage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/${id}`);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (!user) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">User Profile</Typography>
      <Typography variant="h6">Name: {user.name}</Typography>
      <Typography variant="h6">Email: {user.email}</Typography>
      <Typography variant="h6">Expert: {user.isExpert ? 'Yes' : 'No'}</Typography>
      
      <Typography variant="h6">Added Vehicles:</Typography>
      {user.addedVehicles && user.addedVehicles.length > 0 ? (
        user.addedVehicles.map((vehicle) => (
          <Typography key={vehicle._id}>{vehicle.manufacturer} {vehicle.model}</Typography>
        ))
      ) : (
        <Typography>No vehicles added yet.</Typography>
      )}

      {user.isExpert && (
        <div>
          <Typography variant="h6">Requested Test Drives:</Typography>
          {user.requestedTestDrives && user.requestedTestDrives.length > 0 ? (
            user.requestedTestDrives.map((testDrive) => (
              <div key={testDrive._id}>
              <Typography>Vehicle Requested for TestDrive: {testDrive.vehicle.model}</Typography>
              <Typography>Vehicle Requested Date: {testDrive.requestedDate}</Typography>
              <Typography>TestDrive Status: {testDrive.status}</Typography>
              </div>
            ))
          ) : (
            <Typography>No requested test drives.</Typography>
          )}
          
          <Typography variant="h6">Inspected Vehicles:</Typography>
          {user.inspectedVehicles && user.inspectedVehicles.length > 0 ? (
            user.inspectedVehicles.map((inspection) => (
              <Typography key={inspection._id}>{inspection.brand} {inspection.model}</Typography>
            ))
          ) : (
            <Typography>No inspected vehicles.</Typography>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;


import React, { useEffect, useState } from 'react';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/contact')
      .then((res) => res.json())
      .then((data) => setSubmissions(data))
      .catch((error) => console.error('Error fetching submissions:', error));
  }, []);

  return (
    <div>
      <h3>Submitted Forms</h3>
      <ul>
        {submissions.map((submission, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {submission.name}</p>
            <p><strong>Email:</strong> {submission.email}</p>
            <p><strong>Phone:</strong> {submission.phone}</p>
            <p><strong>Service:</strong> {submission.service}</p>
            <p><strong>Message:</strong> {submission.message}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submissions;

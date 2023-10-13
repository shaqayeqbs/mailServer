const generateDummyData = () => {
  const dummyData = [];
  for (let i = 1; i <= 100; i++) {
    const isInbox = Math.random() < 0.5;
    const timestamp = new Date(); // Create a new timestamp for each email

    dummyData.push({
      id: i,
      subject: `Subject ${i}`,
      from: `sender${i}@example.com`,
      content: `Content for email ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      inbox: isInbox,
      timestamp, // Add the 'timestamp' property
    });
  }
  return dummyData;
};

const dummyData = generateDummyData();

export default dummyData;

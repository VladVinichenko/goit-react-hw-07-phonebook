export const getContacts = async () => {
  try {
    const response = await fetch(`https://61fa389931f9c200175966c8.mockapi.io/api/ph1/contacts`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return [];
  } catch (error) {
    console.error(error);
  }

};


export const addContacts = async payload => {
  try {
    const response = await fetch(`https://61fa389931f9c200175966c8.mockapi.io/api/ph1/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return [];
  } catch (error) {
    console.error(error);

    return error;
  }
};

export const deleteContacts = async payload => {
  try {
    await fetch(`https://61fa389931f9c200175966c8.mockapi.io/api/ph1/contacts/${payload}`, {
      method: 'DELETE',
    });

    return payload;
  } catch (error) {
    console.error(error);

    return error;
  }
};
import axios from 'axios';

export const getAllTickets = () => {

    return new Promise(async(resolve, reject) => {

        try {
            const result = await axios.get(
                'http://localhost:3001/v1/ticket',
                {headers:{
                    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWNvMTFAcmVkYnVsbC5jb20iLCJpYXQiOjE2MjE4MDc2OTksImV4cCI6MTYyMTg5NDA5OX0.NX2E9WN3LrEw60S-IjcBCsDKMtzHBYulRFgrpzMed_g'
                }}
            )
            resolve(result)
        } catch (error) {
            reject (error)
        }
    })
};
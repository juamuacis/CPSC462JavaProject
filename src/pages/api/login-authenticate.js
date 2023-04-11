export default function handler(req, res) {
  
    if (req.method === 'POST') {
        // Process a POST request
        console.log(req.body);

        res.status(200).json(JSON.stringify(req.body))
      } else {
        // Handle any other HTTP method
        res.status(404);
      }

}

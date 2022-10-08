//api/new-meet

export const handler = (req, res) => {
  // reuest obj will contain the incoming request and the res
  // will be needed to send the response

  if (req.method == "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
  }
};

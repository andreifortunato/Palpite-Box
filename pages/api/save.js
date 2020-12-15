export default async (req, res) => {
    console.log(JSON.parser(req.body))
    res.end(req.body)
  
}
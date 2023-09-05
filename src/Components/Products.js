import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

export default function Products() {
  return (
    <div className="flex gap-8 flex-wrap justify-center ">
      <Card className="mt-6 w-[500px] px-0 rounded-sm shadow-sm">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none"
        >
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
          <div className="flex">
            <Chip
              variant="ghost"
              value="chip ghost"
              className="rounded-sm capitalize font-semibold text-blue-gray-900"
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>

      <Card className="mt-6 w-[500px] px-0 rounded-sm shadow-sm">
        <CardHeader
          color="blue-gray"
          className="relative h-72 mt-0 px-0 w-full mx-auto rounded-sm shadow-none"
        >
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="w-full h-full object-cover mx-auto "
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
          <div className="flex">
            <Chip
              variant="ghost"
              value="chip ghost"
              className="rounded-sm capitalize font-semibold text-blue-gray-900"
            />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

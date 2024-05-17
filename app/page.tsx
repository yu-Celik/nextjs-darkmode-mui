import { Button, Card, CardContent, CardHeader, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Card >
        <CardHeader >
          <Typography variant="h6">Daily Mix</Typography>
          <Typography variant="subtitle1">12 Tracks</Typography>
          <Typography variant="h5">Frontend Radio</Typography>
        </CardHeader>
        <CardContent className="overflow-visible py-2">
          <Image alt="Card background" src="/hero-card-complete.jpeg" width={270} height={270} priority />
          <Button variant="contained" color="primary">Play</Button>
        </CardContent>
      </Card>
    </>
  );
}

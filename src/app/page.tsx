import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <Card>
        <CardHeader>
          <CardDescription>
            <h1 className="text-2xl font-bold">Header</h1>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <h1 className="text-5xl font-bold">Hello World</h1>
        </CardContent>

        <CardFooter>
          <h1 className="text-2xl font-bold">Footer</h1>
        </CardFooter>
      </Card>
    </div>
  );
}

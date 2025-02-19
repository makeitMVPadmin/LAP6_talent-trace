import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardCharacterLimit,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/cardForm';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { Textarea } from '@/components/ui/textarea';

export function CardWithForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardDescription>Question 1 out of 5 - Skill </CardDescription>
        <CardTitle>This is the first question here</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 mb-2 ">
              <Textarea placeholder="Type your message here." />
              <CardCharacterLimit>0 of 200 characters</CardCharacterLimit>
            </div>
            <div className="flex flex-col space-y-1.5 mb-4">
              <Label htmlFor="framework">
                Additional skills & tools (choose up to 5)
              </Label>
              <div className="relative w-full max-w-sm">
                <Input type="text" placeholder="Add skill" className="pr-10" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Upload /> Upload
        </Button>
      </CardFooter>
    </Card>
  );
}

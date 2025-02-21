import { Plus, X } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardCharacterLimit,
  CardHeader,
  CardTitle,
} from '@/components/ui/cardForm';
import { useContext, useState } from 'react';
import QuestionContext from '@/context/QuestionsContext';
import { Input } from '@/components/ui/input';
import { Badge } from '../ui/badge';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Question() {
  const { questions, categoryName, skillName, error, loading } =
    useContext(QuestionContext);

  const [relatedSkills, setRelatedSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [response, setResponse] = useState('');
  const maxLength = 200;

  const handleAddSkill = () => {
    if (newSkill.trim() && relatedSkills.length < 5) {
      setRelatedSkills([...relatedSkills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setRelatedSkills(relatedSkills.filter((skill) => skill !== skillToRemove));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardDescription>
          Question 1 - {skillName} ({categoryName})
        </CardDescription>
        <CardTitle>
          {questions.length > 0 ? questions[0] : 'No question available'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 mb-2">
              <Textarea
                placeholder="Type your message here."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                maxLength={maxLength}
              />
              <CardCharacterLimit>
                {response.length} / {maxLength} characters
              </CardCharacterLimit>
            </div>

            <div className="flex flex-col space-y-1.5 mb-4">
              <Label>Additional skills & tools (choose up to 5)</Label>
              <div className="relative w-full max-w-sm">
                <Input
                  type="text"
                  placeholder="Add skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="pr-10"
                />

                <Plus
                  className="w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={handleAddSkill}
                  disabled={relatedSkills.length >= 5}
                />
              </div>
              <div className="flex space-x-2">
                {relatedSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="flex items-center space-x-1 px-3 py-1"
                  >
                    <span>{skill}</span>
                    <X
                      onClick={() => handleRemoveSkill(skill)}
                      className="w-3 h-3 cursor-pointer"
                    />
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 mb-4">
              <Label>Image URL</Label>
              <Input
                type="text"
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

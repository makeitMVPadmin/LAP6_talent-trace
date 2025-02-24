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
    <Card className="flex flex-col p-[33px] px-[64px] gap-[10px] border border-[#003660] bg-white shadow-md rounded-[20px] w-[500px] mx-auto sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px]">
      <CardHeader>
        <CardDescription
          className="text-[#003660] font-montserrat text-[16px] font-normal leading-[24px] pb-4"
          style={{
            color: 'var(--Blue-Blue12, #003660)',
            fontFeatureSettings: "'liga' off, 'clig' off",
          }}
        >
          {' '}
          Question 1 - {skillName} ({categoryName})
        </CardDescription>
        <CardTitle className="text-[#003660] font-[Fraunces] text-[24px] font-semibold leading-[133.4%]">
          {questions.length > 0 ? questions[0] : 'No question available'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 mb-2">
              <Textarea
                className="rounded-[8px] h-[156px] border-t border-l border-[#003660] border-r-2 border-b-2 bg-white"
                style={{
                  borderTop: '1px solid var(--Blue-Blue12, #003660)',
                  borderRight: '2px solid var(--Blue-Blue12, #003660)',
                  borderBottom: '2px solid var(--Blue-Blue12, #003660)',
                  borderLeft: '1px solid var(--Blue-Blue12, #003660)',
                  background: 'var(--White, #FFF)',
                }}
                placeholder="Type your response here."
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                maxLength={maxLength}
              />

              <CardCharacterLimit
                className="text-[#003660] font-montserrat text-[16px] font-normal leading-[24px] pb-4"
                style={{
                  color: 'var(--Blue-Blue12, #003660)',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                {response.length} / {maxLength} characters
              </CardCharacterLimit>
            </div>

            <div className="flex flex-col space-y-1.5 mb-4">
              <Label className="text-[#003660] font-[Montserrat] text-[14px] font-medium leading-[20px] pb-2">
                Additional skills & tools
                <span className="font-normal text-[12px] italic">
                  {' '}
                  (choose up to 5)
                </span>
              </Label>

              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Add skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  className="rounded-[8px] border-t border-l border-[#003660] border-r-2 border-b-2 bg-white"
                  style={{
                    borderTop: '1px solid var(--Blue-Blue12, #003660)',
                    borderRight: '2px solid var(--Blue-Blue12, #003660)',
                    borderBottom: '2px solid var(--Blue-Blue12, #003660)',
                    borderLeft: '1px solid var(--Blue-Blue12, #003660)',
                    background: 'var(--White, #FFF)',
                  }}
                />
                <Plus
                  className="w-5 h-5 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={handleAddSkill}
                  disabled={relatedSkills.length >= 5}
                />
              </div>
              <div className="flex space-x-2">
                {relatedSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="flex items-center space-x-1 px-3 py-1 bg-[#003660] text-white rounded-full"
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
              <Label className="text-[#003660] font-montserrat text-[14px] font-medium leading-[20px] pb-2">
                Link a photo that best represents your answer
                <span className="font-normal text-[12px] italic">
                  {' '}
                  (optional; URL link)
                </span>
              </Label>
              <div className="relative">
                <Input
                  className="rounded-[8px] border-t border-l border-[#003660] border-r-2 border-b-2 bg-white"
                  style={{
                    borderTop: '1px solid var(--Blue-Blue12, #003660)',
                    borderRight: '2px solid var(--Blue-Blue12, #003660)',
                    borderBottom: '2px solid var(--Blue-Blue12, #003660)',
                    borderLeft: '1px solid var(--Blue-Blue12, #003660)',
                    background: 'var(--White, #FFF)',
                  }}
                  type="text"
                  placeholder="Enter image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
                <Plus className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

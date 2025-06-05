import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Plus, X, FileText, Eye, Code } from 'lucide-react';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { useToast } from '@/hooks/useToast';
import { MarkdownContent } from '@/components/blog/MarkdownContent';

interface CustomNipForm {
  title: string;
  identifier: string;
  summary: string;
  content: string;
  kinds: string[];
  tags: string[];
}

const initialForm: CustomNipForm = {
  title: '',
  identifier: '',
  summary: '',
  content: '',
  kinds: [],
  tags: [],
};

const exampleNip = `# Custom Event Kind for Gaming

This NIP defines event kind 30100 for gaming-related events on Nostr.

## Event Structure

Gaming events are addressable events of kind \`30100\` with the following structure:

\`\`\`json
{
  "kind": 30100,
  "content": "<game state or description>",
  "tags": [
    ["d", "<unique-game-id>"],
    ["title", "<game title>"],
    ["game", "<game type>"],
    ["players", "<player1-pubkey>", "<player2-pubkey>"]
  ]
}
\`\`\`

## Tags

- \`d\` (required) - unique identifier for the game session
- \`title\` (required) - human-readable title for the game
- \`game\` (required) - type of game (chess, poker, etc.)
- \`players\` (optional) - pubkeys of players involved

## Implementation

Clients implementing this NIP should:

- Display games in a dedicated gaming interface
- Allow filtering by game type
- Show player information and game state
- Support real-time updates for active games

## Examples

### Chess Game

\`\`\`json
{
  "kind": 30100,
  "content": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
  "tags": [
    ["d", "chess-game-123"],
    ["title", "Chess Match: Alice vs Bob"],
    ["game", "chess"],
    ["players", "alice-pubkey", "bob-pubkey"],
    ["fen", "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1"]
  ]
}
\`\`\`
`;

export function PublishCustomNip() {
  const [form, setForm] = useState<CustomNipForm>(initialForm);
  const [newKind, setNewKind] = useState('');
  const [newTag, setNewTag] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('write');
  
  const { user } = useCurrentUser();
  const { mutate: publishEvent, isPending } = useNostrPublish();
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to publish a custom NIP.',
        variant: 'destructive',
      });
      return;
    }

    if (!form.title || !form.identifier || !form.content) {
      toast({
        title: 'Missing Required Fields',
        description: 'Please fill in title, identifier, and content.',
        variant: 'destructive',
      });
      return;
    }

    // Build tags array
    const tags = [
      ['d', form.identifier],
      ['title', form.title],
    ];

    if (form.summary) {
      tags.push(['summary', form.summary]);
    }

    // Add kind tags
    form.kinds.forEach(kind => {
      tags.push(['k', kind]);
    });

    // Add topic tags
    form.tags.forEach(tag => {
      tags.push(['t', tag]);
    });

    publishEvent(
      {
        kind: 30817,
        content: form.content,
        tags,
      },
      {
        onSuccess: () => {
          toast({
            title: 'Custom NIP Published!',
            description: 'Your custom NIP has been published to the Nostr network.',
          });
          setForm(initialForm);
          setIsOpen(false);
        },
        onError: (error) => {
          toast({
            title: 'Publication Failed',
            description: `Failed to publish custom NIP: ${error.message}`,
            variant: 'destructive',
          });
        },
      }
    );
  };

  const addKind = () => {
    if (newKind && !form.kinds.includes(newKind)) {
      setForm(prev => ({ ...prev, kinds: [...prev.kinds, newKind] }));
      setNewKind('');
    }
  };

  const removeKind = (kind: string) => {
    setForm(prev => ({ ...prev, kinds: prev.kinds.filter(k => k !== kind) }));
  };

  const addTag = () => {
    if (newTag && !form.tags.includes(newTag)) {
      setForm(prev => ({ ...prev, tags: [...prev.tags, newTag] }));
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    setForm(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
  };

  const loadExample = () => {
    setForm({
      title: 'Gaming Events Protocol',
      identifier: 'gaming-events',
      summary: 'Event kind 30100 for gaming-related events on Nostr',
      content: exampleNip,
      kinds: ['30100'],
      tags: ['gaming', 'protocol', 'events'],
    });
    setActiveTab('write');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="mr-2 h-4 w-4" />
          Publish Custom NIP
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Publish Custom NIP</DialogTitle>
          <DialogDescription>
            Create and publish your own Nostr Implementation Possibility (NIP) to extend the protocol.
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="write" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Write
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="write" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Gaming Events Protocol"
                  value={form.title}
                  onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="identifier">Identifier *</Label>
                <Input
                  id="identifier"
                  placeholder="e.g., gaming-events"
                  value={form.identifier}
                  onChange={(e) => setForm(prev => ({ ...prev, identifier: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="summary">Summary</Label>
              <Input
                id="summary"
                placeholder="Brief description of your NIP"
                value={form.summary}
                onChange={(e) => setForm(prev => ({ ...prev, summary: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label>Event Kinds</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., 30100"
                  value={newKind}
                  onChange={(e) => setNewKind(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addKind()}
                />
                <Button type="button" variant="outline" onClick={addKind}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {form.kinds.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {form.kinds.map((kind) => (
                    <Badge key={kind} variant="secondary" className="flex items-center gap-1">
                      Kind {kind}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => removeKind(kind)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="e.g., gaming, protocol"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTag()}
                />
                <Button type="button" variant="outline" onClick={addTag}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              {form.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {form.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="flex items-center gap-1">
                      {tag}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => removeTag(tag)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content (Markdown) *</Label>
              <Textarea
                id="content"
                placeholder="Write your NIP specification in Markdown..."
                value={form.content}
                onChange={(e) => setForm(prev => ({ ...prev, content: e.target.value }))}
                rows={12}
                className="font-mono text-sm"
              />
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={loadExample}>
                Load Example
              </Button>
              <div className="flex gap-2">
                <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={isPending || !user}>
                  {isPending ? 'Publishing...' : 'Publish NIP'}
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {form.title || 'Untitled NIP'}
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    Custom
                  </Badge>
                </CardTitle>
                {form.summary && (
                  <CardDescription>{form.summary}</CardDescription>
                )}
                <div className="flex flex-wrap gap-2">
                  {form.kinds.map((kind) => (
                    <Badge key={kind} variant="secondary">
                      Kind {kind}
                    </Badge>
                  ))}
                  {form.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <Separator />
              <CardContent className="pt-6">
                {form.content ? (
                  <MarkdownContent content={form.content} />
                ) : (
                  <p className="text-muted-foreground italic">
                    Content preview will appear here...
                  </p>
                )}
              </CardContent>
            </Card>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setActiveTab('write')}>
                Back to Edit
              </Button>
              <Button onClick={handleSubmit} disabled={isPending || !user}>
                {isPending ? 'Publishing...' : 'Publish NIP'}
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
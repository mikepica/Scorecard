interface RichTextColumnProps {
  title: string
  content: string
}

export default function RichTextColumn({ title, content }: RichTextColumnProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-100 p-4 border-b">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="p-4">
        <div className="rich-text-content prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

Email.destroy_all

50.times do
  Email.create!(
    subject: Faker::Lorem.sentence(word_count: 3, random_words_to_add: 5),
    sender: Faker::Internet.email,
    recipient: Faker::Internet.email,
    body: Array.new(rand(4..15)) do
      Faker::Lorem.paragraph(sentence_count: rand(10..30))
    end.join("\n\n"),
    received_at: Faker::Time.backward(days: 14)
  )
end

puts "Seeded #{Email.count} emails."

class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.text :greeting

      t.timestamps
    end

    5.times do
      Message.create(greeting: Faker::Lorem.sentence(word_count: 3))
    end
  end
end

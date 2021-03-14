# frozen_string_literal: true

Dir[File.join(__dir__, '..', '..', '_plugins', '*.rb')].each do |file|
  require file
end

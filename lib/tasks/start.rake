namespace :start do
  task :development do
    exec 'foreman start -f Procfile.dev'
  end

desc 'Start development server'
task :start => 'start:development'

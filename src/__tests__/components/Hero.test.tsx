import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '../utils/test-utils';
import Hero from '../../components/Hero';

// Mock the utility functions
jest.mock('../../lib/utils', () => ({
  getContentTypeColor: jest.fn((type: string) => {
    const colors: Record<string, string> = {
      music: 'bg-content-music',
      movie: 'bg-content-movie',
      book: 'bg-content-book',
      podcast: 'bg-content-podcast'
    };
    return colors[type] || 'bg-gray-500';
  }),
  getAllMoods: jest.fn(() => [
    {
      id: 'happy',
      label: 'Happy',
      emoji: '😊',
      color: 'bg-yellow-100',
      description: 'Feeling joyful and content',
      therapeuticGoal: 'Maintain positive energy and spread joy'
    },
    {
      id: 'sad',
      label: 'Sad',
      emoji: '😢',
      color: 'bg-blue-100',
      description: 'Feeling down or melancholic',
      therapeuticGoal: 'Provide uplifting content to improve mood'
    }
  ]),
  getMoodTherapeuticGoal: jest.fn((moodId: string) => {
    const goals: Record<string, string> = {
      happy: 'Maintain positive energy and spread joy',
      sad: 'Provide uplifting content to improve mood'
    };
    return goals[moodId] || 'Improve your mood';
  }),
  getMoodIcon: jest.fn((moodId: string) => {
    const icons: Record<string, string> = {
      happy: '😊',
      sad: '😢'
    };
    return icons[moodId] || '😐';
  })
}));

// Mock the mood config
jest.mock('../../config/moodConfig', () => ({
  MOOD_ICON_CONFIG: {
    useHumanImages: false
  }
}));

describe('Hero Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders the main heading', () => {
    render(<Hero />);
    
    expect(screen.getByText(/How are you feeling/i)).toBeInTheDocument();
    expect(screen.getByText(/today/i)).toBeInTheDocument();
  });

  it('displays mood selection grid', () => {
    render(<Hero />);
    
    // Check if mood options are displayed
    expect(screen.getByText('Happy')).toBeInTheDocument();
    expect(screen.getByText('Sad')).toBeInTheDocument();
  });

  it('shows content type selection after mood selection', async () => {
    render(<Hero />);
    
    // Click on a mood
    const happyMood = screen.getByText('Happy');
    fireEvent.click(happyMood);
    
    // Wait for content type selection to appear
    await waitFor(() => {
      expect(screen.getByText(/What type of content would help improve your mood/i)).toBeInTheDocument();
    });
  });

  it('allows multiple content type selection', async () => {
    render(<Hero />);
    
    // Select a mood first
    const happyMood = screen.getByText('Happy');
    fireEvent.click(happyMood);
    
    // Wait for content type selection
    await waitFor(() => {
      expect(screen.getByText('Music')).toBeInTheDocument();
    });
    
    // Select multiple content types
    const musicType = screen.getByText('Music');
    const movieType = screen.getByText('Movies');
    
    fireEvent.click(musicType);
    fireEvent.click(movieType);
    
    // Check if both are selected
    expect(musicType.closest('button')).toHaveClass('border-primary-500');
    expect(movieType.closest('button')).toHaveClass('border-primary-500');
  });

  it('shows recommendations after content type selection', async () => {
    render(<Hero />);
    
    // Select mood
    const happyMood = screen.getByText('Happy');
    fireEvent.click(happyMood);
    
    // Wait for content type selection
    await waitFor(() => {
      expect(screen.getByText('Music')).toBeInTheDocument();
    });
    
    // Select content type
    const musicType = screen.getByText('Music');
    fireEvent.click(musicType);
    
    // Click get recommendations button
    const getRecommendationsBtn = screen.getByText(/Get Mood-Boosting Content/i);
    fireEvent.click(getRecommendationsBtn);
    
    // Wait for recommendations to appear
    await waitFor(() => {
      expect(screen.getByText(/Here are some Music recommendations/i)).toBeInTheDocument();
    });
  });

  it('displays mood therapy message correctly', async () => {
    render(<Hero />);
    
    // Select sad mood
    const sadMood = screen.getByText('Sad');
    fireEvent.click(sadMood);
    
    // Wait for content type selection
    await waitFor(() => {
      expect(screen.getByText(/Provide uplifting content to improve mood/i)).toBeInTheDocument();
    });
  });

  it('resets flow when choosing different mood', async () => {
    render(<Hero />);
    
    // Select a mood and content type
    const happyMood = screen.getByText('Happy');
    fireEvent.click(happyMood);
    
    await waitFor(() => {
      expect(screen.getByText('Music')).toBeInTheDocument();
    });
    
    const musicType = screen.getByText('Music');
    fireEvent.click(musicType);
    
    // Click reset button
    const resetBtn = screen.getByText(/Choose Different Mood/i);
    fireEvent.click(resetBtn);
    
    // Should be back to mood selection
    await waitFor(() => {
      expect(screen.getByText(/Choose your current mood/i)).toBeInTheDocument();
    });
  });

  it('shows signup CTA in recommendations', async () => {
    render(<Hero />);
    
    // Go through the full flow
    const happyMood = screen.getByText('Happy');
    fireEvent.click(happyMood);
    
    await waitFor(() => {
      expect(screen.getByText('Music')).toBeInTheDocument();
    });
    
    const musicType = screen.getByText('Music');
    fireEvent.click(musicType);
    
    const getRecommendationsBtn = screen.getByText(/Get Mood-Boosting Content/i);
    fireEvent.click(getRecommendationsBtn);
    
    // Wait for recommendations and CTA
    await waitFor(() => {
      expect(screen.getByText(/Want to save your mood-boosting favorites/i)).toBeInTheDocument();
      expect(screen.getByText(/Create a free account/i)).toBeInTheDocument();
    });
  });
});

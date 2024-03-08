/* eslint-disable no-unused-vars */
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      answer: {
        Row: {
          created_at: string
          id: string
          submitted_at: string | null
          survey_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          submitted_at?: string | null
          survey_id: string
        }
        Update: {
          created_at?: string
          id?: string
          submitted_at?: string | null
          survey_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_answer_survey_id_fkey'
            columns: ['survey_id']
            isOneToOne: false
            referencedRelation: 'survey'
            referencedColumns: ['id']
          },
        ]
      }
      answer_rel: {
        Row: {
          answer_id: string
          created_at: string
          option_id: string | null
          question_id: string
          submitted_at: string | null
          text: string | null
        }
        Insert: {
          answer_id?: string
          created_at?: string
          option_id?: string | null
          question_id?: string
          submitted_at?: string | null
          text?: string | null
        }
        Update: {
          answer_id?: string
          created_at?: string
          option_id?: string | null
          question_id?: string
          submitted_at?: string | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_answer_rel_answer_id_fkey'
            columns: ['answer_id']
            isOneToOne: false
            referencedRelation: 'answer'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_answer_rel_option_id_fkey'
            columns: ['option_id']
            isOneToOne: false
            referencedRelation: 'option'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'public_answer_rel_question_id_fkey'
            columns: ['question_id']
            isOneToOne: false
            referencedRelation: 'question'
            referencedColumns: ['id']
          },
        ]
      }
      option: {
        Row: {
          created_at: string
          id: string
          index: number
          question_id: string | null
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          index: number
          question_id?: string | null
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          index?: number
          question_id?: string | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_option_question_id_fkey'
            columns: ['question_id']
            isOneToOne: false
            referencedRelation: 'question'
            referencedColumns: ['id']
          },
        ]
      }
      question: {
        Row: {
          created_at: string
          id: string
          required: boolean
          section_id: string
          title: string | null
          type: string
        }
        Insert: {
          created_at?: string
          id?: string
          required?: boolean
          section_id: string
          title?: string | null
          type: string
        }
        Update: {
          created_at?: string
          id?: string
          required?: boolean
          section_id?: string
          title?: string | null
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: 'public_question_section_id_fkey'
            columns: ['section_id']
            isOneToOne: false
            referencedRelation: 'section'
            referencedColumns: ['id']
          },
        ]
      }
      section: {
        Row: {
          created_at: string
          description: string | null
          id: string
          survey_id: string
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          survey_id: string
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          survey_id?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'public_section_survey_id_fkey'
            columns: ['survey_id']
            isOneToOne: false
            referencedRelation: 'survey'
            referencedColumns: ['id']
          },
        ]
      }
      survey: {
        Row: {
          created_at: string
          description: string | null
          id: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database['public']['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database['public']['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never
